
import Image from "next/image";

export default function Loading() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-blue-100 overflow-hidden">

            <div className="flex flex-col items-center justify-center">

                {/* Logo and Loading Animation */}
                <div className="relative flex items-center justify-center w-64 h-64">

                    {/* Outer Rotating Ring */}
                    <div className="absolute inset-0 rounded-full border-[5px] border-blue-200 border-t-[#039BE5] border-r-[#039BE5] animate-spin"></div>

                    {/* Inner Rotating Ring */}
                    <div className="absolute inset-4 rounded-full border-[3px] border-transparent border-b-[#0288D1] animate-[spin_3s_linear_infinite_reverse]"></div>

                    {/* Orbiting Dot */}
                    <div className="absolute inset-0 animate-spin">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#039BE5] shadow-lg shadow-blue-400"></div>
                    </div>

                    {/* Center Logo */}
                    <div className="relative z-10 w-44 h-44 rounded-full bg-white shadow-xl shadow-blue-200 flex items-center justify-center p-5">
                        <Image
                            src="/logo.png"
                            alt="Company Logo"
                            width={160}
                            height={160}
                            priority
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Loading Status */}
                <div className="mt-10 flex flex-col items-center gap-4">

                    <h2 className="text-2xl font-bold text-slate-800 tracking-wide">
                        Welcome Back!
                    </h2>

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#039BE5] animate-pulse"></span>
                        <p className="text-[#0288D1] font-semibold text-sm tracking-[3px] uppercase">
                            Logging You In
                        </p>
                    </div>

                    {/* Loading Progress Bar */}
                    <div className="w-48 h-1.5 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-[#039BE5] rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
                    </div>

                    <p className="text-slate-500 text-xs font-medium">
                        Please wait while we prepare everything...
                    </p>
                </div>

            </div>
        </div>
    );
}


