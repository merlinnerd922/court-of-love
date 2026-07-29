export default function HomePage() {

    let colHomeInfoClass = "col_home_info_line";

    return <>
        <div id="col_home">
            <h1 id="col_next_event_heading">Next event details:</h1>
            <hr/>
            <h1 id="col_home_next_event_title">Court of Love #36 : Bone China<sup>1</sup></h1>
            <p className={colHomeInfoClass}><strong>Cover: </strong>$5</p>
            <p className={colHomeInfoClass}><strong>Date: </strong>Saturday, August 29th, 2026</p>
            <p className={colHomeInfoClass}><strong>Time: </strong>6pm - 9pm</p>
            <p className={colHomeInfoClass}><strong>Where: </strong>Downtown Toronto</p>
            <p className={colHomeInfoClass}><strong>Address: </strong>TBA, released in a private event-related Telegram
                channel
                after the event verifies you</p>
            <div id="col_contact" className={colHomeInfoClass}>
                <p className={colHomeInfoClass}><strong>Contact: </strong></p>
                <ul>
                    <li className={colHomeInfoClass}>@merlinnerd922 on Telegram</li>
                    <li className={colHomeInfoClass}>@merlinnerd1017 on Discord</li>
                </ul>
            </div>
            <sub>1. Not a racial reference, but a reference to the 36th wedding anniversary gift, in line with the event
                being number 36</sub>
        </div>
    </>;
}