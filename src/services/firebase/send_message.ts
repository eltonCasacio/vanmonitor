import axios from "axios"
import { Config } from "../../config/conf"

const SendMessage = (bearerToken: string) => {
    const metadata = {
        type: 'RECEIVE_MESSAGE',
        transactionID: 123,
    }

    const clientTokens = ['abc']

    const notificationPayload = {
        title: "Titulo da notification",
        body: "corpo da notification"
    }

    const notificationData = {
        ...notificationPayload,
        metadata: JSON.stringify(metadata)
    }

    return Promise.all(
        clientTokens.map(token => {
            return axios.post(`http://fcm.googleapis.com/v1/${Config.PROJECT_ID}/messages:send`,
                {
                    validate_only: false,
                    message: {
                        data: notificationData,
                        notification: notificationPayload,
                        token: token,
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`,
                    },
                },
            )
        })
    )
}
