import { MainButton } from "../../../../components/Button"
import SearchComponent from "../../../../components/SearchComponent"
import { DataFilter, ListAccountContainer, ListMenuContainer } from "./styledComponents"
import { ReactComponent as FilterIcon } from "../../../../images/filter.svg"
import CustomTable from "../../../../components/CustomTable"


const ListAccount: React.FC = () => {

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

            <CustomTable />
        </ListAccountContainer>
    )
}

export default ListAccount