import {Link} from "react-router";

export function ColPageLink(currentSubUrl: () => string, thisSubUrl: string, linkText: string) {

    function getActiveStatusClassName() {
        return currentSubUrl() == thisSubUrl ? "colCurrentActiveLink" : "colCurrentInactiveLink";
    }

    return <li className={getActiveStatusClassName()}>
        <Link to={thisSubUrl}>
            <span>{linkText}</span>
        </Link>
    </li>;
}