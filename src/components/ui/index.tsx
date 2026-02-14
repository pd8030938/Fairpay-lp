// Componentes básicos reutilizáveis (UI)
// Este é um exemplo de estrutura - adicione seus componentes aqui

export function Button({ 
  children, 
  onClick,
  className = "" 
}: {
  readonly children: React.ReactNode;
  readonly onClick?: (e?: any) => void | Promise<void>;
  readonly className?: string;
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
  readonly type?: string;
  readonly placeholder?: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly className?: string;
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
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <div className={`bg-slate-50 rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
