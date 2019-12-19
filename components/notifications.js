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

export default async function registerForPushNotificationsAsync(lieu, hdebut, hfin, min, max, ctx) {
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
    let chemin = 'http://3.87.54.32:3000/add/token/' + token + '/' + lieu + '/' + hdebut + '/' + hfin + '/' + min + '/' + max;
   // console.log(chemin);

    if (parseInt(hdebut) > parseInt(hfin) || parseInt(min) > parseInt(max)) {
        Alert.alert("le temps minimum ne peux pas être supérieur au temps maximum ou le flux minimum ne peux pas être supérieur au flux maximum ou ")
    } else {
        fetch('http://3.87.54.32:3000/add/token/' + token + '/' + lieu + '/' + hdebut + '/' + hfin + '/' + min + '/' + max)
            .then(() => {

                Alert.alert(
                    'FluxMonitoring | Notification',
                    'Vous serez notifié si le flux de votre lieux correspond à vos attentes !',
                    [
                        {text: 'OK', onPress: () => ctx.props.navigation.goBack()},

                    ],
                    {cancelable: false},
                );
            })
            .catch((error) => console.error(error));
    }


}
