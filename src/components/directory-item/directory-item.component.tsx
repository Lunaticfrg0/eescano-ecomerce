import { Body, BackgroundImage, DirectoryItemContainer } from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
import { CategoryHeader } from "../../store/categories/category.types";

type DirectoryItemProps ={
  category : CategoryHeader
}

const DirectoryItem = ({category} : DirectoryItemProps) => {
    const { title, imageUrl, route} = category
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
          <Body>
            <h2>{title}</h2>
            <p>Shop Here</p>            
          </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;