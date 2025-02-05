function Message() {
    const name='Georgi';
    if(name)
    return (
        <div>
        <h1>Hello,  {name}</h1>
        </div>
    );
    return (
        <div>
        <h1>Hello Stranger</h1>
        </div>
    );
}

export default Message;