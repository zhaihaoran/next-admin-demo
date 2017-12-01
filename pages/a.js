// components
import Wrapper from "@comps/Head/Common";
import App from "@comps/Front/App";
import commonScss from "@style/scss/common.scss";

export default props => {
    return (
        <Wrapper>
            <style dangerouslySetInnerHTML={{ __html: commonScss }} />
            <App />
        </Wrapper>
    );
};
