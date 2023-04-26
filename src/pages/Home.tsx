import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import ExploreContainer from "../components/ExploreContainer";
import { IonAvatar } from "@ionic/react";


import "./Home.css";
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent  fullscreen>
        <div className="main_container">
          <div className="header">
            <div className="topgrapy">
              <h1 className="title">Hello User</h1>
              <p className="sub">Location</p>
            </div>
            <div>
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
            </div>
          </div>
          
        </div>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
