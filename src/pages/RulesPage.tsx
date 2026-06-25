import {useEffect, useState} from "react";
import colRulesTextResponse from "../assets/Court of Love Rules.markup.txt";
import {marked} from "marked";

export default function RulesPage() {

    const [colRulesMarkdownString, setcolRulesMarkdownString] = useState("");

    useEffect(() => {
        fetch(colRulesTextResponse)
            .then(r => r.text())
            .then(text => {
                setcolRulesMarkdownString(text);
            });
    });

    return <>
        <div id="col_rules_doc" dangerouslySetInnerHTML={
            {__html: marked(colRulesMarkdownString)}
        }></div>
    </>;
}

