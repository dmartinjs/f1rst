import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonBackButton, IonItem, IonLabel, IonList, IonThumbnail, IonIcon, IonTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { ConstructorStandingsLists, Driver } from '../models';

interface ConstructorDetailsProps extends RouteComponentProps<{
  constructorId: string,
}> {}

const ConstructorDetails: React.FC<ConstructorDetailsProps> = ({match}) => {
  const [constructor, setConstructor] = useState<ConstructorStandingsLists | null>(null);
  const [drivers, setDrivers] = useState<[Driver] | null>(null);

  useEffect(() => {
    fetch(`https://ergast.com/api/f1/current/constructors/${match.params.constructorId}/constructorStandings.json`)
      .then(res => res.json())
      .then(result => setConstructor(result.MRData.StandingsTable.StandingsLists[0]));

    fetch(`https://ergast.com/api/f1/current/constructors/${match.params.constructorId}/drivers.json`)
      .then(res => res.json())
      .then(result => setDrivers(result.MRData.DriverTable.Drivers));
  }, [match.params.constructorId]);

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/standings"></IonBackButton>
              <IonTitle>Constructor</IonTitle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {constructor && (
          <IonContent>
            <IonList lines="full">
              <IonItem>
                <IonIcon lazy slot="start" size="large" src={`assets/img/constructors/${constructor.ConstructorStandings[0].Constructor.constructorId}.svg`}/>
                <IonLabel>
                  <p>Team</p>
                  <h2>{constructor.ConstructorStandings[0].Constructor.name}</h2>
                </IonLabel>
                <div slot="end">
                  {constructor.ConstructorStandings[0].Constructor.nationality}
                </div>
              </IonItem>
              {drivers && drivers.map(driver =>
                <IonItem button routerLink={`/driver/${driver.driverId}`} key={driver.driverId}>
                  <div slot="start" className="driver-number font-weight-bold">
                    {driver.permanentNumber}
                  </div>
                  <IonLabel>
                    <p>{driver.givenName}</p>
                    <h2>{driver.familyName}</h2>
                  </IonLabel>
                  <IonThumbnail slot="end" className="country-thumbnail">
                    <img src={`assets/img/flags/${driver.nationality}.svg`} alt={driver.nationality}/>
                  </IonThumbnail>
                </IonItem>
              )}
            </IonList>
          </IonContent>
        )}
    </IonPage>
  );
};

export default ConstructorDetails;
