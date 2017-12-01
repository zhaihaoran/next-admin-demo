import { Steps, Button, message } from "antd";
const Step = Steps.Step;

const steps = [
    {
        title: "第一步",
        content: "打开冰箱"
    },
    {
        title: "第二步",
        content: "把大象装进去"
    },
    {
        title: "第三步",
        content: "关上冰箱"
    }
];

class StepDump extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        return (
            <div>
                <style>
                    {`.steps-content {
                        margin-top: 16px;
                        border: 1px dashed #e9e9e9;
                        border-radius: 6px;
                        background-color: #fafafa;
                        min-height: 200px;
                        text-align: center;
                        padding-top: 80px;
                    }

                    .steps-action {
                        margin-top: 24px;
                    }`}
                </style>
                <Steps>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">
                    {steps[this.state.current].content}
                </div>
                <div className="steps-action">
                    {this.state.current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            下一步
                        </Button>
                    )}
                    {this.state.current === steps.length - 1 && (
                        <Button
                            type="primary"
                            onClick={() =>
                                message.success("Processing complete!")
                            }
                        >
                            完成
                        </Button>
                    )}
                    {this.state.current > 0 && (
                        <Button
                            style={{ marginLeft: 8 }}
                            onClick={() => this.prev()}
                        >
                            上一步
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default StepDump;
