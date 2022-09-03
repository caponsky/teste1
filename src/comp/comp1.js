import { useState }  from 'react';

function increm() {
    const [count, setCount] = useState('');

    const increment = () => {
        setCount((prevCount) => prevCount+=1);
    };

}
export default increm;