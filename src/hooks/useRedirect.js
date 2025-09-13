import { useRouter } from "next/router";

export const useRedirect = () => {

    const router = useRouter();

    const goToPage = (path) => {
        router.push(path);
    };

    return {
        goToPage
    }
 }