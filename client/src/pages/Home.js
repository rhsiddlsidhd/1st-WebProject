import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import visualImage1 from '../image/visualImage1.jpg';

// 이미지 슬라이더 구현
// const [slideImage, setSlideImage] = useState(0);
// const nextSlide = () => {
//     if(slideImage < Image.length - 1) setSlideImage(slideImage + 1);
//     else setSlideImage(0);
// };
// const prevSlide = () => {
//     if(slideImage > 0) setSlideImage(slideImage - 1);
//     else setSlideImage(0);
// };
// useInterval(() => {
//     nextSlide();
// }, 8000)

function Home() {
  return (
    // 메인 비주얼 영역
    <div className='body__div--index-content'>
      <ul className='div__div--visual'>
        {/* 이미지 슬라이더 */}
        <li>
          <img
            src={visualImage1}
            alt='비주얼 이미지1'
            className='li__img--visualimg1'
          />
        </li>
        <div className='div__div--visual-button'>
          <button>이전</button>
          <button>다음</button>
        </div>
      </ul>
      <div className='body__div--index-content-wrap'>
        {/* 베스트 상품 영역 */}
        <div className='div__div--best'>
          <h2 className='div__h2--title'>BEST</h2>
          <div className='div__div--best-list'>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
          </div>
          <div className='div__div--best-list'>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
          </div>
        </div>
        {/* 트렌드 영역 */}
        <div className='div__div--trending'>
          <h2 className='div__h2--trending-title'>Trending Now</h2>
          <div className='div__div--trend-wrap'>
            <Link to='/'>
              <div className='div__div--trend-img-1'></div>
            </Link>
            <Link to='/'>
              <div className='div__div--trend-img-2'></div>
            </Link>
          </div>
        </div>
        <div className='div__div--new'>
          {/* 신제품 영역 */}
          <h2 className='div__h2--new-title'>NEW</h2>
          <div className='div__div--best-list'>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
          </div>
          <div className='div__div--best-list'>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <div className='div__div--best-product-img'>이미지</div>
                <div className='div__div--best-brand-name'>nike</div>
                <div className='div__div--best-product-name'>
                  볼드 코어 블랙 클라우드 화이트
                </div>
                <div className='div__div--best-product-price'>139,000</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
