import React from 'react'
import DecryptDialog from './DecryptDialog'
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

const initialValue2 = {
    secretkey: '',
    code: ''
}

function Decrypt() {
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams();
    const [open_de, setOpen_de] = React.useState(false);
    const [de_value, setde_value] = React.useState(initialValue2);

    const handleClickOpen_de = () => {
        setOpen_de(true);
    };

    const handleClose_de = () => {
        setOpen_de(false);
    };

    const onValueChange = (e) => {
        setde_value({ ...de_value, [e.target.name]: e.target.value })
    }


    React.useEffect(() => {
        if (searchParams.get("code") === null || searchParams.get("secretkey") === null) {
            setde_value({ secretkey: "", code: "" })
        }
        else {
            setde_value({ secretkey: searchParams.get("secretkey").replace(/ /g, "+"), code: searchParams.get("code").replace(/ /g, "+") })
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Helmet>
                <title>cryptote - Decrypt</title>
                <meta
                    name="description"
                    content="Decrypt the private anonymous encrypted secret note with cryptote!"
                />
            </Helmet>
            <div className="en_de_form">
                <div className="decrypt_form">
                    <p>🔐 Decryption</p>
                    <input placeholder="Secret key*" name="secretkey" type="text" onChange={(e) => onValueChange(e)} value={de_value.secretkey} />
                    <input placeholder="Code*" name="code" type="text" onChange={(e) => onValueChange(e)} value={de_value.code} />
                    <button onClick={handleClickOpen_de} disabled={de_value.code === "" || de_value.secretkey === ""}>Decrypt</button>
                </div>
            </div>
            <Link style={{ textDecoration: 'none' }} to='/encrypt'><p style={{ color: 'crimson', textAlign: 'center', margin: '10px', padding: '0%' }}>CREATE YOUR OWN SECRET NOTE 🙈😈</p></Link>
            <DecryptDialog open={open_de} handleClose={handleClose_de} secretkey={de_value.secretkey} code={de_value.code} />
        </>
    )
}

export default Decrypt