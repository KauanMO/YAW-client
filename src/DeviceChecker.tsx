import { useEffect, useState } from "react";
import styled from "styled-components";

const Aviso = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(75, 75, 75, 0.85);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-size: 2rem;
  z-index: 9999;
`;

export default function DeviceChecker({ children }: { children: React.ReactNode }) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isDesktop) {
        return <Aviso>⚠️ Este site foi feito para dispositivos móveis. ⚠️<br /> Acesse o link pelo seu celular, por favor!</Aviso>;
    }

    return <>{children}</>;
}
