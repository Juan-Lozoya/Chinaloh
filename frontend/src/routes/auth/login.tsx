import { Input, Button } from "@heroui/react";
import { useAppDispatch } from "@/store/hooks";
import { authService } from "@/services/auth.service";
import { useState } from "react";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authService.login(dispatch, data.username, data.password);
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
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setData({ ...data, password: e.target.value })}
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
