import { useState } from 'react'

const EditCompany = ({ company, setEditing, getCompanies}) => {

    const [companyUpdate, setCompanyUpdate] = useState({
        name: company.name,
        description: company.description,
        logoUrl: company.logoUrl,
        ticker: company.ticker
    })

    const handleChange = (e) => {
        setCompanyUpdate((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
                fetch(`${process.env.REACT_APP_API_URL}/companies/${company._id}`, {      
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(companyUpdate),
            })
            .then((response) => {
                console.log("updated Company ===>", response)

    getCompanies()
                setEditing(false)
    
            })
            .catch((err) => {
                console.log(err)
            })
        }


    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>Name
                <input name='name' type='text' onChange={handleChange} value={companyUpdate.name} />
            </label>
            <label>Description
                <input name='description' type='text' onChange={handleChange} value={companyUpdate.description}/>
            </label>
            <label>Logo Url
                <input name='logoUrl' type='text'onChange={handleChange} value={companyUpdate.logoUrl} />
            </label>
            <label>Ticker
                <input name='ticker' type='text'onChange={handleChange} value={companyUpdate.ticker} />
            </label>

            <button type='submit'>Edit Company</button>

        </form>

            <button onClick={() => setEditing(false)}>Cancel</button>
        </>
    )

}

export default EditCompany