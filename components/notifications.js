import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import {Alert} from "react-native";

/**
 * Envoie une notification au terminal
 * pour tester : utilise https://expo.io/notifications pour simuler une notification avec le token
 * ATTENTION : pour effectuer les test lancer expo start et posséder un compte expo
 * https://docs.expo.io/versions/latest/guides/push-notifications/
 */

// const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

export default async function registerForPushNotificationsAsync(lieu, hdebut, hfin, min, max) {
    const {status: existingStatus} = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;


    if (existingStatus !== 'granted') {
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }


    if (finalStatus !== 'granted') {
        return;
    }


    let token = await Notifications.getExpoPushTokenAsync();

    console.log(token);
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    let chemin = 'http://3.87.54.32:3000/add/token/' + token + '/' + lieu + '/' + hdebut + '/' +  hfin + '/' + min + '/' + max;
    console.log(chemin);

     fetch('http://3.87.54.32:3000/add/token/' + token + '/' + lieu + '/' + hdebut + '/' +  hfin + '/' + min + '/' + max)
        .then(() => {
            Alert.alert("Notification envoyé au serveur")
        })
        .catch((error) => console.error(error));



}
