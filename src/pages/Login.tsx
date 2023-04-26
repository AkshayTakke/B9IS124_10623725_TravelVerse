import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Login.css";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  useIonRouter,
} from "@ionic/react";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { code, logoGoogle } from "ionicons/icons";
import "@codetrix-studio/capacitor-google-auth";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

const Login: React.FC = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };
  const router = useIonRouter();

  function handleClick() {
    router.push("Home");
  }

  const google_login = async () => {
    try {
      const response = await GoogleAuth.signIn();
      // Do something with the user's information
    } catch (error:any) {
      if (error) {
        // Redirect the user to the login page
        router.push("Home");
      } else {
        // Handle other errors
        console.error(error);
      }
    }
  
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="main_container_login">
          <div>
            <h1 className="head">Login</h1>
            <IonItem lines="none" className="input">
              <IonLabel className="label" position="floating">
                Email
              </IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem lines="none" className="input">
              <IonLabel className="label" position="floating">
                Password
              </IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonButton onClick={handleClick} class="btn_login" expand="block">
              Login
            </IonButton>

            <IonButton onClick={google_login} class="btn_login" expand="block">
              <IonIcon class="icn" icon={logoGoogle}></IonIcon>
              <p className="left">Login with google</p>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
