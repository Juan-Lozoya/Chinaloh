import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);

// Selector de auth listo para usar
export const useAuth = () => useAppSelector((state) => state.auth);
