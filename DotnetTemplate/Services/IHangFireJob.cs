using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetTemplate.HangFireService
{
    interface IHangFireJob
    {
        /// <summary>
        /// Method to Impletement Hangfire Job
        /// </summary>
         void HangFireJobExecute();
    }
}
