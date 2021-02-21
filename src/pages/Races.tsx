import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import RaceList from '../components/RaceList';

const Races: React.FC = () => {

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Races</IonTitle>
          <IonButtons slot="end">
            <IonButton href="/settings">
              <IonIcon slot="icon-only" icon={settingsOutline}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <RaceList season={getYear()}/>
      </IonContent>
    </IonPage>
  );
};

export default Races;
