import { config } from '../../../x/http/config';
import { Injectable } from '@angular/core'
import * as Rx from 'rxjs/Rx';
import { getSession } from '../../../x/storage/storage';

@Injectable()
export class WebsocketService {
    constructor() { }

    private subject: Rx.Subject<MessageEvent>;

    public connect(sub): Rx.Subject<MessageEvent> {
        const url = config.websocket+sub
        if (!this.subject) {
            this.subject = this.create(url);
            console.log("Successfully connected: " + url);
        }
        return this.subject;
    }

    private create(url): Rx.Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = Rx.Observable.create(
            (obs: Rx.Observer<MessageEvent>) => {
                ws.onmessage = obs.next.bind(obs);
                ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);
                return ws.close.bind(ws);
            })
        let observer = {
            next: (data: Object) => {
                console.log(data)
                if (ws.readyState === WebSocket.OPEN) {
                    // ws.send(JSON.stringify(data));
                     ws.send(data);
                }
            }
        }
        return Rx.Subject.create(observer, observable);
    }


}