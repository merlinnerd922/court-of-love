import {useEffect, useState} from "react";
import colRulesTextResponse from "../assets/Court of Love Rules.markup.txt";
import {marked} from "marked";
import '../styles/col_rules.scss';

export default function RulesPage() {

    const [colRulesMarkdownString, setColRulesMarkdownString] = useState("Loading...");

    useEffect(() => {
        fetch(colRulesTextResponse)
            .then(r => r.text())
            .then(text => {
                setColRulesMarkdownString(text);
            });
    });

    return <>
        <div id="col_rules_doc" dangerouslySetInnerHTML={
            {__html: marked(colRulesMarkdownString)}
        }></div>
    </>;
}

