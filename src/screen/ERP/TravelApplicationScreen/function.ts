
const extractDropdownData = (
  source: any,
  key: string,
): {data: {id: number; name: string}[]} => {
    
    return{
        data:source?.data?.[key]??[]
    }
};

export default extractDropdownData