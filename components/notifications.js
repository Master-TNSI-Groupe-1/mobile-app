import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

/**
 * Envoie une notification au terminal
 * pour tester : utilise https://expo.io/notifications pour simuler une notification avec le token
 * ATTENTION : pour effectuer les test lancer expo start et posséder un compte expo
 * https://docs.expo.io/versions/latest/guides/push-notifications/
 */

// const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

export default async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;


    if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }


    if (finalStatus !== 'granted') {
        return;
    }


    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);

    // POST the token to your backend server from where you can retrieve it to send push notifications.
    // return fetch(PUSH_ENDPOINT, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         token: {
    //             value: token,
    //         },
    //         user: {
    //             username: 'Brent',
    //         },
    //     }),
    // });
}
