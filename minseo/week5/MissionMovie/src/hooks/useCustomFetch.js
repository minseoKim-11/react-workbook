import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance.js";

const useCustomFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                console.log("📡 요청 URL:", url);
                const res = await axiosInstance.get(url);
                console.log("✅ 응답 데이터:", res.data);
                setData(res.data);
            } catch (error) {
                console.error("❌ 에러 발생:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        if (url) fetchData();
    }, [url]);

    return { data, isLoading, isError };
};

export default useCustomFetch;
