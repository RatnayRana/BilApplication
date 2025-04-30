import { StyleProp, ViewStyle } from "react-native";
import LoaderCompoment from "../Loader/index.loader";

interface loaderAttributes{
    ispending:Boolean;
    loaderStyle?:StyleProp<ViewStyle>
    name:string,
    width:number;
    height:number;
    color:string;
    isLoading:boolean
}


const LoaderComponent =({
    ispending,
    loaderStyle,
    name,
    width,
    height,
    color,
    isLoading

}:loaderAttributes)=>{
    if (!ispending) return null;

    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <LoaderCompoment
        LoaderStyle={loaderStyle}
        name={name}
        width={width}
        height={height}
        color={color}
        isLoading={isLoading}
      />
    );
}

export default LoaderComponent