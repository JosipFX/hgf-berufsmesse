import React from 'react';

interface SalaryGraphProps {
  salaries: {
    year: string;
    amount: number;
  }[];
}

export function SalaryGraph({ salaries }: SalaryGraphProps) {
  const maxSalary = Math.max(...salaries.map(s => s.amount));
  
  return (
    <div className="space-y-3">
      {salaries.map((salary, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="w-24 text-sm font-medium text-[#555555]">{salary.year}</div>
            <div className="flex-1 h-8 bg-[#F5F5F5] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#8B4513] to-[#A67C52] rounded-full transition-all duration-500"
                style={{ 
                  width: `${(salary.amount / maxSalary) * 100}%`,
                }}
              >
                <div className="h-full flex items-center justify-end pr-3">
                  <span className="text-sm font-bold text-white">
                    CHF {salary.amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}