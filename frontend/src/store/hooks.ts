import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";
import { isAxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { authQueryOptions } from "@/services/queries/auth.queries";
import { useEffect } from "react";
import { clearAuth, setUser } from "./slices/authSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);

export const useAuth = () => useAppSelector((state) => state.auth);

export function useAuthMe(){
  const dispatch = useAppDispatch();
  const query = useQuery(authQueryOptions);

  useEffect(() => {
    if (query?.data?.success) dispatch(setUser(query.data.data.user));

  }, [query.error, dispatch]);

  useEffect(() => {
    if (isAxiosError(query.error) && query.error.response?.status === 401){
      dispatch(clearAuth());
    }
  }, [query.error, dispatch]);

  return query;
}