import { useState } from 'react';
import '../css/manage_image.css';
import Modal from 'react-modal';

const customModalStyles = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '100',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '360px',
    height: '180px',
    zIndex: '150',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    overflow: 'auto',
  },
};
const ManageImage = ({ prd }) => {
  const [product, setProduct] = useState(prd);
  const [mainImages, setMainImages] = useState(prd.main_images);
  const [detailImages, setdetailImages] = useState(prd.detail_images);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  console.log('ManageImage :', product);
  const handleMove = (target, direction, index) => (e) => {
    e.preventDefault();
    console.log(target, direction, index);
    const startIndex = index;
    let endIndex = -1;
    console.log('>>>', mainImages.length);

    const imageArray = target === 'main' ? mainImages : detailImages;

    if (direction === '+') {
      if (imageArray.length > startIndex + 1) {
        endIndex = startIndex + 1;
      }
    } else {
      if (startIndex - 1 >= 0) {
        endIndex = startIndex - 1;
      }
    }
    console.log(startIndex, endIndex);
    if (endIndex !== -1) {
      const startImg = imageArray[startIndex];
      const endImg = imageArray[endIndex];

      const arranged = [...imageArray];
      arranged[endIndex] = startImg;
      arranged[startIndex] = endImg;
      setMainImages(arranged);
    }
  };
  const handleDeleteImage = (img_id) => (e) => {
    e.preventDefault();
    setModalText(`이미지를 삭제 중입니다...\n${img_id}`);
    setModalIsOpen(true);
    setTimeout(() => {
      //해당 부분은 삭제 로직으로 대체될 코드
      setModalIsOpen(false);
    }, 1200);
  };

  const handleUpdateImages = (e) => {
    e.preventDefault();
    setModalText('이미지를 업로드 중입니다...');
    setModalIsOpen(true);
    setTimeout(() => {
      //해당 부분은 업로드 로직으로 대체될 코드
      setModalIsOpen(false);
    }, 1200);
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customModalStyles} ariaHideApp={true}>
        {modalText}
      </Modal>
      <div>
        메인이미지
        <button>추가</button>
        <table>
          <tbody>
            {mainImages.map((img, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{img.url}</td>
                  {/* <img
                    src={img.url}
                    alt=''
                    srcset=''
                    class='image-manager__main_image'
                  /> */}
                  <td>
                    <button onClick={handleMove('main', '-', index)}>up</button>
                  </td>
                  <td>
                    <button onClick={handleMove('main', '+', index)}>
                      down
                    </button>
                  </td>
                  <td>
                    <button onClick={handleDeleteImage(img.image_id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        상세이미지
        <button>추가</button>
        <table>
          <tbody>
            {detailImages.map((img, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{img.url}</td>
                  {/* <img
                    src={img.url}
                    alt=''
                    srcset=''
                    class='image-manager__main_image'
                  /> */}
                  <td>
                    <button onClick={handleMove('main', '-', index)}>up</button>
                  </td>
                  <td>
                    <button onClick={handleMove('main', '+', index)}>
                      down
                    </button>
                  </td>
                  <td>
                    <button>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handleUpdateImages}>이미지 저장</button>
    </div>
  );
};
export default ManageImage;
