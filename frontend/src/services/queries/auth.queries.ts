import { queryOptions } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";

export const authQueryOptions = queryOptions({
  queryKey: ["auth", "me"],
  queryFn: authService.me,
  staleTime: 5 * 60 * 1000,
  retry: false,
});