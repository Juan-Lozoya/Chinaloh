import { Input, Button } from "@heroui/react";
import { useAppDispatch } from "@/store/hooks";
import { authService } from "@/services/auth.service";
import { useNavigate } from "@tanstack/react-router";
import { setUser } from "@/store/slices/authSlice";
import { useState } from "react";
import type { LoginRequest } from "@/types/Login";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [user, setData] = useState<LoginRequest>({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (user.username.length == 0 || user.password.length == 0) return;

    try {
      const { success, data, message } = await authService.login(user);

      if (success) {
        dispatch(setUser(data.user));
        await navigate({ to: "/home" });
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className="p-3 h-full">
        <div className="w-full flex items-center justify-center">
          <h2 className="font-semibold text-2xl self-center flex">Chinaloh</h2>
        </div>

        <div className="mt-20 grid space-y-3">
          <Input
            type="text"
            placeholder="Nombre de Usuario"
            onChange={(e) => setData({ ...user, username: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setData({ ...user, password: e.target.value })}
          />
          <div className="mt-30 w-full flex items-center justify-center">
            <Button onClick={handleSubmit} className="">
              Iniciar Sesion
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
