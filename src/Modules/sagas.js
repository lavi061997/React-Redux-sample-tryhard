import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchTournaments() {

    const json = yield fetch('https://app.tryhard.gg/tournament/open', {headers: {
        'X-COSMOS-AUTH':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTM4NTcwNTg2OTkxIiwicGxhdGZvcm1Db2RlIjoiMSIsInBsYXRmb3JtVXNlcklkIjoiNzY1NjExOTgyMjM4NjAyMjgiLCJleHAiOjE1NjE3MjU5NzF9.hxH-gpgxfr7zk4AFvkdZ2UzhoxpXSUC8LJ7t1NUf1nxwrSiK-RN5jSwGuWlvfjLW171ZelviEaWC54YUjdAaHw'
    }})
        .then(response => response.json());

    yield put({ type: "TOURNAMENTS_RECEIVED", json: json.response});
}

function* actionWatcher() {
    yield takeLatest('GET_TOURNAMENTS', fetchTournaments)
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}