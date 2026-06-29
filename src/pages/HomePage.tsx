export default function HomePage() {

    let colHomeInfoClass = "col_home_info_line";

    return <>
        <div id="col_home">
            <h1>Next event details:</h1>
            <hr/>
            <p className={colHomeInfoClass}><strong>When: </strong>July 24, 2026, 6pm - 9pm</p>
            <p className={colHomeInfoClass}><strong>Where: </strong>Downtown Toronto</p>
            <p className={colHomeInfoClass}><strong>Address: </strong>TBA, released in a private event-related Telegram channel
                after the event verifies you</p>
            <p className={colHomeInfoClass}><strong>Telegram: </strong><a>https://t.me/CoLPride35</a></p>
        </div>
    </>;
}