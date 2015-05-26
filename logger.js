/**
 * Created by syf on 15/5/24.
 */

function Debug()
{
    this.enableLog = true;
    this.log = function(logStr)
    {
        if(this.enableLog)
        {
            console.log(logStr);
        }
    }
}

exports.Debug = Debug;
