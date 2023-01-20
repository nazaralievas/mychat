const APP_ID = '65d30f7fcc824b42a0cee834a75f8506'
const CHANNEL = 'main'
const TOKEN = '007eJxTYFj5u9LyhN2vifu190dc8ReQVAxgLeMq+vthiYPpZc/tbn4KDGamKcYGaeZpyckWRiZJJkaJBsmpqRbGJonmpmkWpgZm4mdOJTcEMjL0H/FkZmSAQBCfhSE3MTOPgQEANfgfDg=='
let UID;

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container id=user-container-${UID}">
                        <div class="username-wrapper"><span class="user-name">My name</span></div>
                        <div class="video-player" id="user-${UID}"></div>
                    </div>`
    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])
}

joinAndDisplayLocalStream()