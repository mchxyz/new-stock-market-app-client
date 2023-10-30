import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import AddCompany from "../components/AddCompany";
import EditCompany from "../components/EditCompany";

export const CompaniesPage = () => {
    const [companies, setCompanies] = useState([]);
    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false)

    const {user} = useContext(AuthContext)

    const getCompanies = () => {
    fetch(`${process.env.REACT_APP_API_URL}/companies`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCompanies(data.companies)
            });
}

  const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/companies/${id}`, {
            method: "Delete",
            headers: { "Content-Type": "application/json" }
        })
        .then((response) => {
            console.log("deleted Company ===>", response)
            getCompanies()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
       getCompanies();
    }, []);

    return (
        <div>
            <h1>Trending Companies</h1>
            {user && <button onClick={() => setAdding(true)}>Add New Company</button>}
            {adding && <AddCompany setAdding={setAdding} getCompanies={getCompanies} />}
            {companies.map(company => (
                <div className="border m-1">
                    <img src={company.logoUrl} alt="" height={64} />
                    <h2>{company.name}</h2>
                    <div>{company.ticker}</div>
                    <div>{company.description}</div>
                         
                         {user &&
                           <>
                <button onClick={() => setEditing(true)}>Edit Company</button>
                <button onClick={() => handleDelete(company._id)}>Delete Company</button>              
                {editing && <EditCompany company={company} setEditing={setEditing} getCompanies={getCompanies} />}
            </>
                         }
                       
                </div>
            ))}
        </div>
    );
};
