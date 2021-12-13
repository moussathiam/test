import { Accordion } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

export default function Menu(props) {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Alphabets (A-B-C)</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                <Link to="/identifier3lettres">Activité 1</Link>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>t-p-n-m-r-v-l-d-b</Accordion.Header>
                    <Accordion.Body>
                    <ul>
                            <li>
                                <Link to="/identifier3tpnm">Activité 1</Link>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Chiffres 1-2-3...</Accordion.Header>
                    <Accordion.Body>
                    <ul>
                            <li>
                                <Link to="/identifier3chiffres">Activité 1</Link>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}