import  { useEffect, useState } from 'react';
import { TokenAttributes, tokenMiddleware } from '../token.middleware';



const GlobalUseEffect = ():TokenAttributes | undefined => {
    const [tokenData, setTokenData] = useState<TokenAttributes | undefined>(
          undefined,
      );

      useEffect(() => {
        const fetchData = async () => {
          const data = await tokenMiddleware();

          setTokenData(data);
        };
        fetchData();
      }, []);
    return tokenData;
};

export default GlobalUseEffect;
