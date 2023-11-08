const { Image } = require('../models');
const mongoose = require('mongoose');
const path = require('path');
const { nanoid } = require('nanoid');
const axios = require('axios');

const addImages = async (files) => {
  const sendingFiles = [];
  console.log(files);
  for (let file of files) {
    let newItem = {
      ...file,
    };
    let buff = file.buffer;
    let base64buffer = buff.toString('base64');
    let ext = path.extname(file.originalname);
    newItem['buffer'] = base64buffer;
    newItem['id'] = nanoid();
    newItem['ext'] = ext;

    sendingFiles.push(newItem);
  }

  const up = await axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { files: sendingFiles },
    url: 'http://localhost:8080/sinbad_images',
  });

  const result = [];
  for (let item of up.data.result) {
    let img = new Image();
    img.image_id = item.image_id;
    img.url = item.url;
    img.size = item.size;
    let img_result = await img.save();
    result.push(img_result);
  }

  return result;
};

const deleteImages = async (files) => {
  const up = await axios({
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { files: files },
    url: 'http://localhost:8080/sinbad_images',
  });

  return up.data;
};

module.exports = {
  addImages,
  deleteImages,
};
