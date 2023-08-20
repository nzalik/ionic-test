import {IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import axios from 'axios';
import React, {useEffect} from "react";
const Tab1: React.FC = () => {
    const [items, setItems] = React.useState([]);
    const sendGetRequest = async () => {

        const response = await axios({
            url: "/get/features/paginate",
            method: 'get'
        });
        console.log(response);
        return response.data;
    };

    useEffect(() => {

        sendGetRequest().then(response => setItems(response.data));

    }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Administration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Administration</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Administration page" />
          <IonList color="primary">

              {
                  items.map(item => {

                      return (
                          <IonItem>
                              {item['name']}
                              <IonButton href={item['url']} color="primary" slot="end">See article</IonButton>
                          </IonItem>
                      );
                  })
              }

          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
