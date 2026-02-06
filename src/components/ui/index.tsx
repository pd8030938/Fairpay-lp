// Componentes básicos reutilizáveis (UI)
// Este é um exemplo de estrutura - adicione seus componentes aqui

export function Button({ 
  children, 
  onClick,
  className = "" 
}: {
  children: React.ReactNode;
  onClick?: (e?: any) => void | Promise<void>;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}

export function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = ""
}: {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 ${className}`}
    />
  );
}

export function Card({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
