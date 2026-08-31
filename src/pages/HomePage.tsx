export default function HomePage() {

    let colHomeInfoClass = "col_home_info_line";

    return <>
        <div id="col_home">
            <h1 id="col_next_event_heading">Next event details:</h1>
            <hr/>
            <h1 id="col_home_next_event_title">Court of Love #37 : Alabaster<sup>1</sup></h1>
            <p className={colHomeInfoClass}><strong>Cover: </strong>$5 (additional donations welcome as well)</p>
            <p className={colHomeInfoClass}><strong>Date: </strong>Friday, September 25th, 2026</p>
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
            <sub>1. Alabaster is a gift given for the 37th anniversary of a marriage in some contexts. I thought it might be fun to number my events in a similar way!</sub>
        </div>
    </>;
}