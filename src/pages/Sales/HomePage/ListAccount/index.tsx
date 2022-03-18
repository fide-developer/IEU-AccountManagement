import { MainButton } from "../../../../components/Button"
import SearchComponent from "../../../../components/SearchComponent"
import { DataFilter, ListAccountContainer, ListMenuContainer } from "./styledComponents"
import { ReactComponent as FilterIcon } from "../../../../images/filter.svg"
import CustomTable from "../../../../components/CustomTable"


const ListAccount: React.FC = () => {
    const title = ["Name", "Province", "City", "Type", "Product", "Status", "RM/Sales", "OPIC"]
    const data = [
        {
            name: "Budi Kasih",
            province: "DKI Jakarta",
            city: "Jakarta Selatan",
            type: "Coorporate",
            product: "1:G/1:H",
            status: "Cold / Hot Prospect",
            sales: "APM",
            OPIC: "ALK"
        },
        {
            name: "Budi Kasih 2",
            province: "DKI Jakarta",
            city: "Jakarta Selatan",
            type: "Coorporate",
            product: "1:G/1:H",
            status: "Cold / Hot Prospect",
            sales: "APM",
            OPIC: "ALK"
        },
        {
            name: "Budi Kasih 3",
            province: "DKI Jakarta",
            city: "Jakarta Selatan",
            type: "Coorporate",
            product: "1:G/1:H",
            status: "Cold / Hot Prospect",
            sales: "APM",
            OPIC: "ALK"
        }
    ]

    return(
        <ListAccountContainer>
            <div> List Account </div>
            <ListMenuContainer>
                <DataFilter>
                    <SearchComponent />
                    <FilterIcon />
                    <div> Filter </div>
                </DataFilter>
                <MainButton>Add New Account</MainButton>
            </ListMenuContainer>

            <CustomTable title={title} data={data}/>
        </ListAccountContainer>
    )
}

export default ListAccount