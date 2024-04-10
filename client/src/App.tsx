import Textbox from "./components/Textbox";
const App = () => {
    const text =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, beatae natus repellat asperiores voluptatibus, magni amet, reiciendis sint adipisci officiis dolore nisi distinctio vero itaque quidem omnis. Eaque, ex eum!";
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Monke Code type</h1>
            <Textbox text={text} />
        </div>
    );
};

export default App;
