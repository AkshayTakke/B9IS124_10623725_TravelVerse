import "./ExploreContainer.css";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { shareSocial } from "ionicons/icons";
import { heartCircle } from "ionicons/icons";
import { location } from "ionicons/icons";

import { airplane, fastFood } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonImg } from "@ionic/react";
import { Share } from '@capacitor/share';



interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
 async function share_link(){
  await Share.share({
    title: 'See cool stuff',
    text: 'Really awesome thing you need to see right now',
    url: 'http://ionicframework.com/',
    dialogTitle: 'Share with buddies',
  });
  }
  return (
    <div className="main_container">
      <div className="card_flex">
        <IonCard mode="ios" className="card">
          <IonCardContent>
            <IonIcon icon={airplane}></IonIcon>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios" className="card">
          <IonCardContent>
            <IonIcon icon={fastFood}></IonIcon>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios" className="card">
          <IonCardContent>
            <IonIcon icon={airplane}></IonIcon>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios" className="card">
          <IonCardContent>
            <IonIcon icon={airplane}></IonIcon>
          </IonCardContent>
        </IonCard>
      </div>
      <p className="show_cat">All Category</p>
      <Swiper
        className="swiper_main"
        slidesPerView={4}
        spaceBetween={20}
        pagination={true}
      >
        <SwiperSlide>
          <div className="border">
          <p className="cat">New</p>
          </div>
        </SwiperSlide>

          <SwiperSlide>
            <div  className="border">
            <p className="cat">Tour</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className="border">
          <p className="cat">Asia</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className="border">
          <p className="cat">Adventure</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className="border">
          <p className="cat">ALL</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className="border">
          <p className="cat">Uk</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className="border">
          <p className="cat">London</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className="border">
          <p className="cat">Itly</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <p className="show_cat">Feature Products</p>

      <Swiper
        className="swiper_main"
        slidesPerView={1.5}
        spaceBetween={20}
        autoplay={true}
      >
        <SwiperSlide>
          <IonCard onClick={share_link} mode="ios" className="swiper_card">
            <IonImg  className="port" src="assets/airplane.jpg" alt="My Image" />
            <IonImg  className="shareicon" src="assets/send.png" alt="My Image" />
          </IonCard>
        </SwiperSlide>
        <SwiperSlide>
          <IonCard onClick={share_link}  mode="ios" className="swiper_card">
            <IonImg className="port" src="assets/men.jpg" alt="My Image" />
            <IonImg  className="shareicon" src="assets/send.png" alt="My Image" />
          </IonCard>
        </SwiperSlide>
        <SwiperSlide>
          <IonCard onClick={share_link} mode="ios" className="swiper_card">
            <IonImg className="port" src="assets/3.jpg" alt="My Image" />
            <IonImg  className="shareicon" src="assets/send.png" alt="My Image" />
          </IonCard>
        </SwiperSlide>
        <SwiperSlide>
          <IonCard onClick={share_link} mode="ios" className="swiper_card">
            <IonImg className="port" src="assets/4.jpg" alt="My Image" />
            <IonImg  className="shareicon" src="assets/send.png" alt="My Image" />
          </IonCard>
        </SwiperSlide>
      </Swiper>



      <div>
      <p className="show_cat">Top Rated</p>

  <IonCard mode="ios" className="ion-no-padding ion-no-margin"
  style={{ height: '100px', borderRadius: '12px', marginTop: '30px' }}>
    <div style={{ display: 'flex' }}>
      <div>
        <img src="assets/3.jpg" className="product_img1" />
      </div>
      <div className="card_data">
        <span>
          <div className="rating_div2">
            <img src="assets/star.png" style={{ width: '10px', marginRight: '4px' }} />
            <span className="rat">4.5</span>
          </div>

          <div className="featured">
            <div className="appart">
              <h4 className="name">Resturent</h4>
            </div>
            <h4 className="price">$ 100</h4>
          </div>
        </span>
        <div className="row" style={{ marginBottom: '-5px' }}>
          <h1 className="aprt_name">Location name</h1>
          <div className="cont">
            <div className="locate">
            <IonIcon  icon={location}></IonIcon>
              <p className="ago" style={{ maxWidth: '150px', width: 'auto' }}>address</p>
            </div>
            <IonIcon  icon={heartCircle}></IonIcon>
          </div>
        </div>
      </div>
    </div>
  </IonCard>
  <IonCard mode="ios" className="ion-no-padding ion-no-margin"
  style={{ height: '100px', borderRadius: '12px', marginTop: '30px', marginBottom: '30px' }}>
    <div style={{ display: 'flex' }}>
      <div>
        <img src="assets/4.jpg" className="product_img1" />
      </div>
      <div className="card_data">
        <span>
          <div className="rating_div2">
            <img src="assets/star.png" style={{ width: '10px', marginRight: '4px' }} />
            <span className="rat">4.5</span>
          </div>

          <div className="featured">
            <div className="appart">
              <h4 className="name">Appartment</h4>
            </div>
            <h4 className="price">$ 100</h4>
          </div>
        </span>
        <div className="row" style={{ marginBottom: '-5px' }}>
          <h1 className="aprt_name">Location name</h1>
          <div className="cont">
            <div className="locate">
            <IonIcon  icon={location}></IonIcon>
              <p className="ago" style={{ maxWidth: '150px', width: 'auto' }}>address</p>
            </div>
            <IonIcon  icon={heartCircle}></IonIcon>
          </div>
        </div>
      </div>
    </div>
  </IonCard>
</div>
    </div>


  );
};

export default ExploreContainer;
