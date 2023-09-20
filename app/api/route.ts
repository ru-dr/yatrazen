import axios from "axios";

const useTranslate = () => {
  const translate = async (to: string, from: string, text: string) => {
    try {
      const res = await axios.get(
        `https://api.pawan.krd/gtranslate?from=${from}&to=${to}&text=${text}`,

      );
      return res.data;
    } catch (error: any) {
      console.error(error);
    }
  };

  return {
    translate,
  };
};

export default useTranslate;
