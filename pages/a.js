// components
import Wrapper from "@comps/Head/Common";
import App from "@comps/Front/App";

export default props => {
    return (
        <Wrapper>
            {/* <style dangerouslySetInnerHTML={{ __html: commonScss }} /> */}
            <App />
        </Wrapper>
    );
};
