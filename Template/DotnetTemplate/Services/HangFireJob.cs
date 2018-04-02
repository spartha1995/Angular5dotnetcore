using DotnetTemplate.HangFireJob;
using Hangfire;

namespace DotnetTemplate.HangFireService
{
    public class HangFireJob : IHangFireJob
    {
        public object HangFireJobClass { get; private set; }

        public void  HangFireJobExecute()
        {
            BackgroundJob.Enqueue(() => SendMail());
        }


        private void SendMail()
        {
            HandFireJobClass.SendMailHangFire();
        }
    }
}
